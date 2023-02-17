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
  static async updateStatusOrder(orderId,status) {
    instance.put('order/update-status-order/'+orderId,{ status })
  }
}