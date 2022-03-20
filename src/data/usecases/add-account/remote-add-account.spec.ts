import faker from 'faker'

import { HttpPostClientSpy } from '@/data/test'
import { AccountModel } from '@/domain/models'
import { AddAccountParams } from '@/domain/usecases'
import { mockAddAccountParams } from '@/domain/test/mock-add-account'
import { HttpStatusCode } from '@/data/protocols/http'
import { mockAccountModel } from '@/domain/test'

import { RemoteAddAccount } from './remote-add-account'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  httpPostClientSpy.response = {
    statusCode: HttpStatusCode.OK,
    body: mockAccountModel(),
  }
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy,
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAddAccountParams())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const addAccounParams = mockAddAccountParams()
    await sut.add(addAccounParams)
    expect(httpPostClientSpy.body).toEqual(addAccounParams)
  })
})
