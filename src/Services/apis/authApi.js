import api from "./api";

export const signup = data => {
   return api.post('/signup', data)
}

export const login = data => {
   return api.post('/login', data)
}

export const verifyOtp = data => {
   return api.post('/verify-otp', data)
}