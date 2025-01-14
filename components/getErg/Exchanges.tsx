import { useTheme } from 'next-themes';
import Image from 'next/image';
import Button from '../Button';
import { FormattedMessage } from 'react-intl';

type Props = {
  exchanges: any;
};

export default function Exchanges({ exchanges }: Props) {
  const { theme } = useTheme();

  return (
    <div
      id="Exchanges"
      className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 relative z-10"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="">
          <p className="text-[#585858] dark:text-[#585858] mb-4 font-bold">
            <FormattedMessage
              defaultMessage="BUY, SELL AND TRADE ERGO"
              id="components.exchanges.heading"
            />
          </p>
          <h2>
            <FormattedMessage defaultMessage="Exchanges" id="components.exchanges.subheading" />
          </h2>
        </div>
        <div>
          <p className="font-subtitle-3-bold text-[#807e7e] dark:text-[#807e7e] mb-6 max-w-lg">
            <FormattedMessage
              defaultMessage="Available across popular exchanges and decentralized exchanges."
              id="components.exchanges.available"
            />
          </p>
          <p className="text-[#807e7e] dark:text-[#807e7e] max-w-lg">
            <FormattedMessage
              defaultMessage="Disclaimer: Exchanges provide highly varying degrees of safety, security, privacy, and control over your funds and information. We highly recommend being custodial of your own funds and using one of the wallet options provided above."
              id="components.exchanges.disclaimer"
            />
            <br />
            <br />
            <Button
              text="BUYING GUIDE"
              url="blog/buying-guide/"
              newTab={false}
              underline={true}
              textColor="brand-orange"
              background={false}
              icon="ArrowRight"
              iconColor="orange"
              customClass=" -ml-4 mb-8"
            />
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
        {exchanges.map((exchange: any) => (
          <div key={exchange.id} className="col-span-1 flex justify-center py-8 px-8 m-auto">
            <a href={exchange.attributes.url} target="_blank" rel="noreferrer">
              {theme == 'dark' && exchange.attributes.image_dark.data != null ? (
                <Image
                  width={exchange.attributes.image_dark.data?.attributes.width}
                  height={exchange.attributes.image_dark.data?.attributes.height}
                  src={exchange.attributes.image_dark.data?.attributes.url}
                  alt={exchange.attributes.name}
                />
              ) : (
                <Image
                  width={exchange.attributes.image.data?.attributes.width}
                  height={exchange.attributes.image.data?.attributes.height}
                  src={exchange.attributes.image.data?.attributes.url}
                  alt={exchange.attributes.name}
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
