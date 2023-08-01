/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "identificationService.v1";

export interface SignUpUserDTO {
  email: string;
  phonenumber: string;
  password: string;
}

export interface SignUpResponse {
  id: string;
  email: string;
}

export interface SignInUserDTO {
  email: string;
  password: string;
}

export interface SignInResponse {
  id: string;
  email: string;
}

export const IDENTIFICATION_SERVICE_V1_PACKAGE_NAME = "identificationService.v1";

export interface IdentificationServiceClient {
  signUp(request: SignUpUserDTO): Observable<SignUpResponse>;

  signIn(request: SignInUserDTO): Observable<SignInResponse>;
}

export interface IdentificationServiceController {
  signUp(request: SignUpUserDTO): Promise<SignUpResponse> | Observable<SignUpResponse> | SignUpResponse;

  signIn(request: SignInUserDTO): Promise<SignInResponse> | Observable<SignInResponse> | SignInResponse;
}

export function IdentificationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["signUp", "signIn"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("IdentificationService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("IdentificationService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const IDENTIFICATION_SERVICE_NAME = "IdentificationService";
