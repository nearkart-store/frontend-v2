interface ProductSpecificationsProps {
  specifications: Record<string, string | string[]>
}

export function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(specifications).map(([category, specs]) => (
          <div key={category}>
            <h4 className="font-medium text-base mb-2 pb-1 border-b">{category}</h4>
            <dl className="space-y-2">
              {typeof specs === "string" ? (
                <div className="grid grid-cols-2 gap-2">
                  <dt className="text-sm text-gray-500 dark:text-gray-400">{category}</dt>
                  <dd className="text-sm">{specs}</dd>
                </div>
              ) : (
                Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-2">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">{key}</dt>
                    <dd className="text-sm">{value}</dd>
                  </div>
                ))
              )}
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}

