import request from '~/utils/request'

const api_name = '/admin/cmn/dict'

export default {
  findByDictCode(dictCode) {
    return request({
      url: `${api_name}/findByDictCode/${dictCode}`,
      // url: `http://localhost/admin/cmn/dict/findByDictCode/Hostype`,
      method: 'get'
    })
  },

  findByParentId(parentId) {
    return request({
      url: `${api_name}/findByParentId/${parentId}`,
      method: 'get'
    })
  }
}
