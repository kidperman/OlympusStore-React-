import { NavbarComponent } from "../components/Shared/Navbar/NavbarComponent";

export const Purchases = () => {
    return (
        <>
            <NavbarComponent />
            <div className="container mt-12 mx-auto">
                <div className="flex flex-col p-12 bg-green-300/50 rounded-md">
                    <h2 className="font-bold text-center text-xl">Historial de Compras</h2>
                    <div className="flex flex-col">
                        <span>ID de Compra: </span>
                        <span>Productos Comprados</span>
                        <div className="flex">
                            <span>ID del Producto:</span>
                            <span>Cantidad</span>
                        </div>
                        <span>Monto de Compra:</span>
                        <span>Dirección:</span>
                        <span>Estado de compra: </span>
                        <div className="flex w-full">
                            <span>Compra realizada el:</span>
                            <span>Compra actualizada el:</span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
