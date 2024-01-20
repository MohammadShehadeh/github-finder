export type FetchDataResponse<T> = Promise<T | { message: string; error: true }>;

/**
 * Handles a fetch request with error handling.
 *
 * @template T The expected type of data in the response.
 * @param {...Parameters<typeof fetch>} params The parameters to pass to the fetch function.
 * @returns {FetchDataResponse<T>} A promise resolving to the fetched data or an error object.
 */
export const safeFetch = <T>(...params: Parameters<typeof fetch>): FetchDataResponse<T> =>
  fetch(...params)
    .then((response) => response.json() as Promise<T>)
    .catch((error) => {
      return { message: error, error: true };
    });
