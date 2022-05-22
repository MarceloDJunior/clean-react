import { LocalUpdateCurrentAccount } from '@/data/usecases/update-current-account/local-update-current-account'
import { SetStorageMock } from '@/data/test'
import { UnexpectedError } from '@/domain/errors'
import { mockAccountModel } from '@/domain/test'

type SutTypes = {
  sut: LocalUpdateCurrentAccount
  setStorageSpy: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageMock()
  const sut = new LocalUpdateCurrentAccount(setStorageSpy)

  return { sut, setStorageSpy }
}

describe('LocalUpdateCurrentAccount', () => {
  test('Should call SetStorage with correct value', () => {
    const { sut, setStorageSpy } = makeSut()
    const account = mockAccountModel()
    sut.save(account)
    expect(setStorageSpy.key).toBe('account')
    expect(setStorageSpy.value).toBe(JSON.stringify(account))
  })

  test('Should throw if SetStorage throws', () => {
    const { sut, setStorageSpy } = makeSut()
    jest.spyOn(setStorageSpy, 'set').mockImplementation(() => {
      throw new Error()
    })
    expect(() => {
      sut.save(mockAccountModel())
    }).toThrow(new Error())
  })

  test('Should throw if accessToken is falsy', () => {
    const { sut } = makeSut()
    expect(() => {
      sut.save(undefined)
    }).toThrow(new UnexpectedError())
  })
})
