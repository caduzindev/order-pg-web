import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export const QueryClientContext = ({children}) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)