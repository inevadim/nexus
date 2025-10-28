"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логируем ошибку в сервис мониторинга
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="error-boundary">
      <div className="error-content">
        <h2>Что-то пошло не так!</h2>
        <p>Произошла непредвиденная ошибка</p>

        <div className="error-actions">
          <button onClick={reset} className="retry-button">
            Попробовать снова
          </button>
        </div>

        {/* Дополнительная информация для разработки */}
        {process.env.NODE_ENV === "development" && (
          <details className="error-details">
            <summary>Детали ошибки (только для разработки)</summary>
            <pre>{error.message}</pre>
            {error.digest && <p>Digest: {error.digest}</p>}
          </details>
        )}
      </div>
    </div>
  );
}
