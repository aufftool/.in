curl -X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" \
     -H "Authorization: Bearer O9vXN0AxaJYOAb_WxCgF8GXj-SNITO8IP_kxY63a" \
     -H "Content-Type:application/json"
  {

  "result": {

    "id": "100bf38cc8393103870917dd535e0628",

    "status": "active"

  },

  "success": true,

  "errors": [],

  "messages": [

    {

      "code": 10000,

      "message": "This API Token is valid and active",

      "type": null

    }

  ]

}
