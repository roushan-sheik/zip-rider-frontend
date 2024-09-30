import { Nexios } from "nexios-http"
import { NexiosOptions } from "nexios-http/types/interfaces"

// Default configuration for Nexios
const defaultConfig: NexiosOptions = {
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
}

const nexiosInstance = new Nexios(defaultConfig)
export default nexiosInstance
