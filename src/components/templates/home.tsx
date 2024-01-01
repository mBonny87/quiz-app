// import { InputSearch } from '../atoms/input-search';
import { Label, LabelType } from '../atoms/label';
import { Filter } from '../molecules/filter';
import { Header } from '../organisms/header';
import { Sidebar } from '../organisms/sidebar';
import { CardsList } from '../molecules/card-list';
import { useNavigate } from 'react-router-dom';
import { Content } from '../organisms/content';
import { Quiz, useQuizQuery } from '../../store/api/quiz';
import { ChangeEvent, useState } from 'react';
import { ButtonGroup } from '../molecules/buttons-group';
import { useLanguageSwitcher } from '../../hooks/use-language-switcher';
import { Language } from '../../store/slices/language';
import { useIntl } from 'react-intl';
import { MobileVersionSticker } from '../atoms/mobile-version';

export const Home = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const [selectedFilters, setSelectedFilters] = useState<string[]>();
  const switchLanguage = useLanguageSwitcher();

  const handleLanguageChange = (newLanguage: Language) => {
    switchLanguage(newLanguage);
  };
  const { isLoading, isError, data } = useQuizQuery({});

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error</>;
  }
  if (!data?.length) {
    return 'Nessun quiz disponibile';
  }

  const handleFiltersChange = (evt: ChangeEvent) => {
    const { id, checked } = evt.target as HTMLInputElement;
    if (checked) {
      setSelectedFilters([...(selectedFilters || []), id]);
    } else {
      setSelectedFilters(
        selectedFilters?.filter((filter) => filter !== id) || []
      );
    }
  };

  const filters = data?.map((quiz: Quiz) => ({
    label: quiz.topic,
    onChange: handleFiltersChange,
  }));

  const handleSelectedFilters = (list: Quiz[]) => {
    if (!selectedFilters?.length) {
      return list;
    }

    return list?.filter((quiz: Quiz) => selectedFilters?.includes(quiz.topic));
  };

  const cards = handleSelectedFilters(data).map((quiz: Quiz) => ({
    imageUrl: quiz.imageUrl,
    title: quiz.title,
    subtitle: quiz.subtitle,
    text: quiz.text,
    onClick: () => navigate(quiz.id),
  }));

  return (
    <div className="flex h-screen w-full flex-col">
      <Header>
        <Label className="text-slate-800" type={LabelType.Subtitle}>
          Quiz App
        </Label>
        <Label
          className="flex-1 text-center text-slate-800"
          type={LabelType.Title}
        >
          {intl.formatMessage({
            defaultMessage: 'Select a quiz',
            id: 'syp+T5OyjduMm2yf',
          })}
        </Label>
        <ButtonGroup
          buttons={[
            {
              image: {
                src: '/england-flag.webp',
                alt: 'England Flag',
              },
              onClick: () => handleLanguageChange('en'),
            },
            {
              image: {
                src: '/italy-flag.png',
                alt: 'Italian Flag',
              },
              onClick: () => handleLanguageChange('it'),
            },
          ]}
        ></ButtonGroup>
      </Header>
      <div className="flex w-full flex-1 overflow-auto">
        <Sidebar>
          <Label className="text-slate-800" type={LabelType.SectionTitle}>
            {intl.formatMessage({
              defaultMessage: 'Filters',
              id: 'zSOvI0LO0njZVCM1',
            })}
          </Label>
          {/* <InputSearch></InputSearch> */}
          <div className="flex w-full flex-col items-start gap-4 truncate p-4">
            <Filter list={filters} />
          </div>
        </Sidebar>
        <Content>
          <CardsList list={cards}></CardsList>
        </Content>
      </div>
      <MobileVersionSticker></MobileVersionSticker>
    </div>
  );
};
