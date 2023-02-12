import { instance } from ".";

export class OrderServiceApi {
  static async getAllFilter(filter) {
    const data = await instance.get('order/all',{
      params: {
        name: filter.name || '',
        status: filter.status || '',
      }
    })

    return data.data
  }
}