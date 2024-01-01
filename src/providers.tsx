import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';

import EnglishMessages from './locales/en.json';
import ItalianMessages from './locales/it.json';
import { RootState } from './store';

const messagesMap = {
  en: EnglishMessages,
  it: ItalianMessages,
  // Add more languages as needed
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const restClient = new QueryClient();
  const language = useSelector((state: RootState) => state.language);
  const messages = messagesMap[language];

  return (
    <QueryClientProvider client={restClient}>
      <IntlProvider messages={messages} locale={language} defaultLocale="en">
        {children}
      </IntlProvider>
    </QueryClientProvider>
  );
};
