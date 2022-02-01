import DECODE_QR_AND_STORE from "./types"

export function decodeQrAndStore(payload) {
  console.log(payload)
    return {
      type: "DECODE_QR_AND_STORE",
      payload,
    };
  }