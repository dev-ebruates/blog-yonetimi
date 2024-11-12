import { Button } from "antd";


const RegisterForm = () => {
  return (
    <div className="register-form min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md space-y-8 rounded-lg p-6 bg-white shadow-md form">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          KAYIT OL
        </h2>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Ad Soyad
              </label>
              <input
                type="text"
                className="mt-1 block w-full  border rounded-md border-gray-300 p-2"
                placeholder="Ad Soyad"
              ></input>
            </div>
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full  border rounded-md border-gray-300 p-2"
                placeholder="ornek@email.com"
              ></input>
            </div>
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full  border rounded-md border-gray-300 p-2"
                placeholder="****"
              ></input>
            </div>
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
              Password again
              </label>
              <input
                type="password"
                className="mt-1 block w-full  border rounded-md border-gray-300 p-2"
                placeholder="****"
              ></input>
            </div>
          </div>
         <Button type="primary" className="w-full" >Kayıt Ol</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
