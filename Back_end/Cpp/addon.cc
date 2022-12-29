#include <node.h>

void Sum(const v8::FunctionCallbackInfo<v8::Value> &args) {

    v8::Isolate* isolate = args.GetIsolate();

    int i;

    // double a = args[0].As<v8::Number>()->Value() , b = args[1].As<v8::Number>()->Value() ;
    double a = 1 , b = 1.111;
    for (int i = 0 ; i < 1000000000 ; i++) a += b ;

    auto total = v8::Number::New(isolate , a);

    args.GetReturnValue().Set(total);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports , "sum" , Sum);
}

NODE_MODULE(addon , Initialize);