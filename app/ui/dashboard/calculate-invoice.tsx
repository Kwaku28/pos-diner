export default function CalculateInvoice() {
  return (
    <div className="flex flex-col h-30 mt-2 p-3 gap-3 rounded-3xl bg-slate-100">
      <div className="flex justify-between">
        <span className="text-lg pl-3 text-slate-400">Subtotal</span>
        <span className="text-lg pr-3">$35.97</span>
      </div>
      <div className="flex justify-between">
        <span className="text-lg pl-3 text-slate-400">Tax (10%)</span>
        <span className="text-lg pr-3">$3.597</span>
      </div>
    </div>
  )
}
