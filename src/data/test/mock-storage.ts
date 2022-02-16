import { SetStorage } from '@/data/protocols/cache/set-storage'

export class SetStorageMock implements SetStorage {
  key?: string
  value?: string

  // eslint-disable-next-line @typescript-eslint/require-await
  async set(key: string, value: string): Promise<void> {
    this.key = key
    this.value = value
  }
}
