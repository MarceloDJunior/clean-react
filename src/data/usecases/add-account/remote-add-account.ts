import { AddAccount, AddAccountParams } from '@/domain/usecases'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AccountModel>
  ) {}

  async add(params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        if (!httpResponse.body) {
          throw new UnexpectedError()
        }
        return httpResponse.body
      case HttpStatusCode.FORBIDDEN:
        throw new EmailInUseError()
      default:
        throw new UnexpectedError()
    }
  }
}
