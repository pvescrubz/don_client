"use client";

import { useGetOrders } from "@/feature/orders/useGetOrders";
import { formatDate } from "@/shared/utils/format-date";
import { getStatusColor } from "@/shared/utils/get-status-сolor";
import {
  translateOperation,
  translatePaymentMethod,
  translateStatus,
} from "@/shared/utils/order-translators";
import clsx from "clsx";
import { FC, useState } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { IconArraw } from "../../ui/svg/IconFilterArraw";
import styles from "./Orders.module.css";

export const Orders: FC = () => {
  const { orders } = useGetOrders();

  const [openRows, setOpenRows] = useState<string[]>([]);

  const toggleOpen = (id: string) => {
    setOpenRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.root}>
          <h2 className={styles.title}>
            {" "}
            {orders && orders?.length === 0
              ? "История операций пуста"
              : "История операций"}
          </h2>
          {orders && orders?.length > 0 && (
            <div className={clsx(styles.box_table, "scrollbar")}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th>Дата</th>
                    <th>Тип операции</th>
                    <th>Статус</th>
                    <th>Сумма</th>
                    <th>Метод</th>
                    <th>Скины</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order) => (
                    <tr key={order.id} className={styles.tr}>
                      <td className={styles.td} title="Дата">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className={styles.td} title="Тип операции">
                        {translateOperation(order.operation)}
                      </td>
                      <td className={styles.td} title="Статус">
                        <span
                          style={{
                            backgroundColor: getStatusColor(order.status),
                          }}
                          className={styles.status}
                        >
                          {translateStatus(order.status)}
                        </span>
                      </td>

                      <td className={styles.td} title="Сумма">
                        {order.amount} ₽
                      </td>
                      <td className={styles.td} title="Метод">
                        {translatePaymentMethod(order.paymentMethod)}
                      </td>
                      <td className={styles.td} title="Скины">
                        {(order.skins || !order.skins) &&
                          order.skins?.length === 0 && <>-</>}
                        {order.skins && order.skins.length > 0 && (
                          <>
                            <button
                              className={styles.skins_button}
                              onClick={() => toggleOpen(order.id)}
                            >
                              {order.skins?.length} шт.{" "}
                              <IconArraw strokeWidth="2" />
                            </button>

                            <div
                              className={clsx(
                                styles.collapce,
                                openRows.includes(order.id) &&
                                  styles.open &&
                                  styles.open
                              )}
                            >
                              <ul className={styles.skins_list}>
                                {order.skins.map((item) => (
                                  <li
                                    className={styles.skin_item}
                                    key={item.id}
                                  >
                                    {item.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
