import DECODE_QR_AND_STORE from "./types"


export function decodeQrAndStore(payload) {
    return {
      type: "DECODE_QR_AND_STORE",
      payload,
    };
  }

 