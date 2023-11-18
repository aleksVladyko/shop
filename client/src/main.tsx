import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Index from "./components/outlet/index.tsx";
import "./index.css";
import { LazyProducts } from "./pages/LazyProducts.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Index /> },
            {
                path: "products/",
                element: (
                    <Suspense fallback={"Loading"}>
                        <LazyProducts />
                    </Suspense>
                ),
            },
            { path: "products/:id", element: <ProductDetails /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
