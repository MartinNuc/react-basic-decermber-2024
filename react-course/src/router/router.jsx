import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Joke } from "../joke/joke";
import { VendingMachine } from "../vending-machine";
import {Welcome} from './welcome'

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
        path: 'vending-machine',
        element: <VendingMachine />
      }
    ]
  }
])