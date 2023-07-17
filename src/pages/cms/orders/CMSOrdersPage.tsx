import { ServerError, Spinner } from "@shared/components";
import { Order, OrderStatus } from "@shared/models";
import { useOrdersService } from "@shared/services";
import { useEffect } from "react";

export function CMSOrdersPage() {
  const { state, actions } = useOrdersService();

  useEffect(() => {
    actions.getOrders();
  }, []);

  return (
    <div>
      <h1 className="title">ORDERS</h1>

      <hr className="my-8" />

      {state.pending && <Spinner />}

      {state.error && <ServerError>{state.error}</ServerError>}

      <table className="border-collapse table-auto w-full my-12">
        <thead>
          <th className="text-left">CLIENT / DATE</th>
          <th className="text-left">ORDER INFO</th>
          <th className="text-center">ACTIONS</th>
        </thead>

        <tbody>
          {state.orders.map(
            ({ id, created, user, order, status, total }: Order) => (
              <tr key={id} className="h-24">
                <td>
                  <div className="text-xl font-bold">{user.name}</div>
                  <div className="">{new Date(created).toDateString()}</div>
                </td>

                <td className="text-left">
                  <div>Total: € {total}</div>
                  <div>
                    {order.reduce((acc, { qty }) => acc + qty, 0)} products
                  </div>
                </td>

                <td className="text-center">
                  {status === OrderStatus.Pending && (
                    <button
                      className="btn primary"
                      onClick={() => actions.updateStatus(id, OrderStatus.Done)}
                    >
                      Mark as Done
                    </button>
                  )}

                  <button
                    className="btn danger"
                    onClick={() => actions.deleteOrder(id)}
                  >
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
