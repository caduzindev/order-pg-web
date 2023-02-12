import { instance } from ".";

export class OrderServiceApi {
  async getAllFilter(filter) {
    return instance.get('order/all',{
      params: {
        name: filter.name || '',
        status: filter.status || '',
      }
    })
  }
}