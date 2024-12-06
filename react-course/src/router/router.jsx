import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Joke } from "../joke/joke";
import { VendingMachine } from "../vending-machine";
import {Welcome} from './welcome'
import {RegistrationForm} from '../pages/registration-form'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: 'joke',
        element: <Joke />
      },
      {
        path: 'registration',
        element: <RegistrationForm />
      },
      {
        path: 'vending-machine',
        element: <VendingMachine />
      }
    ]
  }
])