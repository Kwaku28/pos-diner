'use client';

import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { lusitana } from "../fonts";
import { useState } from "react";
import InvoiceModal from "./invoice-modal";
import InvoiceCard from "./invoice-card";
import CalculateInvoice from "./calculate-invoice";

export default function Invoice() {
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="fixed bottom-0 right-2 left-2 flex items-center justify-between mt-3 p-4 bg-black text-white rounded-full">
          <div className="flex items-center gap-1">
            <ShoppingBagIcon className="w-7 mb-0.5" />
            <span className="pl-1 text-xl">$200</span>
            <span className="text-xs mt-0.5 text-slate-400">3 Items</span>
          </div>
          <button onClick={() => setInvoiceModalOpen(true)} className={`${lusitana.className} text-xl`}>
            Process Invoice
          </button>
        </div>
      </div>
      {invoiceModalOpen && (
        <InvoiceModal
          isOpen={invoiceModalOpen}
          handleClose={() => setInvoiceModalOpen(!invoiceModalOpen)}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl text-center font-semibold">Order #2255</h2>
            <div className="space-y-2 pt-4">
              <h3 className="text-xl py-2 font-semibold">Customer Information</h3>
              <form className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 border-2 border-slate-200 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-2 border-2 border-slate-200 rounded-md outline-none"
                />
              </form>
            </div>
            <div className="py-2">
              <h3 className="text-xl py-2 font-semibold">Items</h3>
              <InvoiceCard />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Order Summary</h3>
              <CalculateInvoice />
            </div>
            <div className="relative flex justify-center">
              <button className="fixed bottom-0 bg-black w-[90%] text-white p-2 rounded-full">Process Order</button>
            </div>
          </div>
        </InvoiceModal>
      )}
    </>
  );
}
