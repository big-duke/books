import axios, {
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

const REQUEST_TIMEOUT = 5000;
export class BaseRequest {
  private axiosInstance: AxiosInstance;
  
  constructor(options:AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      ...options,
      timeout: REQUEST_TIMEOUT,      
    }); 
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get(url, config).then(response => response.data);
  }
}
