import Solutions from 'data/Solutions.json'
import Telemetry from '~/lib/telemetry'
import gaEvents from '~/lib/gaEvents'
import { useTelemetryProps } from 'common/hooks/useTelemetryProps'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import SectionContainer from '../Layouts/SectionContainer'
import { motion } from 'framer-motion'
import BackedBy from '../BackedBy'
import { useBreakpoint } from 'common'

const Card = ({
  classname,
  title,
  subtitle,
  image,
  onClick,
  url,
}: {
  title: string
  subtitle: string | React.ReactNode
  url: string
  image: any
  onClick: any
  classname?: string
}) => (
  <Link href={url}>
    <a
      className={[
        'relative col-span-1 lg:col-span-4 h-[360px] md:h-[460px] flex flex-col gap-5 lg:flex-row',
        classname,
      ].join(' ')}
      onClick={onClick}
    >
      <motion.div
        className={`relative overflow-hidden group/2 flex-1 flex flex-col items-center gap-5 lg:items-start justify-between bg-scale-100
                  w-full border dark:border-scale-300 border-scale-400 rounded-xl h-full px-6 py-12 shadow-lg`}
        initial="default"
        animate="default"
        whileHover="hover"
      >
        <div className="relative z-10 flex flex-col items-center mx-auto text-center gap-2 text-scale-1200">
          <h3 className="text-xl">{title}</h3>
          <p className="text-sm text-scale-900">{subtitle}</p>
        </div>
        {image}
      </motion.div>
    </a>
  </Link>
)

const opacityVariant = {
  default: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
}

const Features = () => {
  const router = useRouter()
  const telemetryProps = useTelemetryProps()

  const sendTelemetryEvent = async (product: any) => {
    switch (product) {
      case 'Database':
        return await Telemetry.sendEvent(
          gaEvents['www_hp_subhero_products_database'],
          telemetryProps,
          router
        )
      case 'Authentication':
        return await Telemetry.sendEvent(
          gaEvents['www_hp_subhero_products_auth'],
          telemetryProps,
          router
        )
      case 'Storage':
        return await Telemetry.sendEvent(
          gaEvents['www_hp_subhero_products_storage'],
          telemetryProps,
          router
        )
      case 'Edge Functions':
        return await Telemetry.sendEvent(
          gaEvents['www_hp_subhero_products_edgeFunctions'],
          telemetryProps,
          router
        )
      case 'Realtime':
        return await Telemetry.sendEvent(
          gaEvents['www_hp_subhero_products_realtime'],
          telemetryProps,
          router
        )
    }
  }
  const isSm = useBreakpoint(640)

  return (
    <SectionContainer className="space-y-8 max-w-7xl mt-24 lg:mt-0 !pt-0">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-6">
        <Card
          url={Solutions['database'].url}
          title={Solutions['database'].name}
          subtitle={
            <>
              Every project is a full Postgres database,
              <br className="inline-block sm:hidden md:inline-block" /> the world's most trusted
              relational database.
            </>
          }
          onClick={() => sendTelemetryEvent(name)}
          image={
            <div className="absolute inset-0 z-0">
              <motion.div className="absolute inset-0 z-10" variants={opacityVariant}>
                <Image
                  src="/images/index/database-dark-hover.jpg"
                  alt="Supabase Postgres Database, hover image with glow"
                  layout="fill"
                  objectPosition={isSm ? 'bottom' : '50% 50%'}
                  objectFit={isSm ? 'contain' : 'cover'}
                  quality={100}
                />
              </motion.div>
              <Image
                src="/images/index/database-dark.jpg"
                alt="Supabase Postgres Database"
                layout="fill"
                objectPosition={isSm ? 'bottom' : '50% 50%'}
                objectFit={isSm ? 'contain' : 'cover'}
                quality={100}
              />
            </div>
          }
        />
        <Card
          url={Solutions['authentication'].url}
          title={Solutions['authentication'].name}
          subtitle={
            <>
              Add user sign ups and logins,
              <br className="inline-block sm:hidden md:inline-block" /> securing your data with Row
              Level Security.
            </>
          }
          image={
            <div className="absolute inset-0 z-0">
              <motion.div className="absolute inset-0 z-10" variants={opacityVariant}>
                <Image
                  src="/images/index/auth-dark-hover.jpg"
                  alt="Supabase Authentication feature, hover image with glow"
                  layout="fill"
                  objectPosition="50% 50%"
                  objectFit="cover"
                  quality={100}
                />
              </motion.div>
              <Image
                src="/images/index/auth-dark.jpg"
                layout="fill"
                objectPosition="50% 50%"
                objectFit="cover"
                quality={100}
              />
            </div>
          }
          classname="lg:!col-span-2"
          onClick={() => sendTelemetryEvent(name)}
        />
        <Card
          url={Solutions['storage'].url}
          title={Solutions['storage'].name}
          subtitle={
            <>
              Store, organize, and serve large files.
              <br className="inline-block sm:hidden md:inline-block" /> Any media, including videos
              and images.
            </>
          }
          image={
            <div className="absolute inset-0 z-0">
              <motion.div className="absolute inset-0 z-10" variants={opacityVariant}>
                <Image
                  src="/images/index/storage-dark-hover.jpg"
                  alt="Supabase Storage feature, hover image with glow"
                  layout="fill"
                  objectPosition="50% 50%"
                  objectFit="cover"
                  quality={100}
                />
              </motion.div>
              <Image
                src="/images/index/storage-dark.jpg"
                alt="Supabase Storage feature"
                layout="fill"
                objectPosition="50% 50%"
                objectFit="cover"
                quality={100}
              />
            </div>
          }
          classname="lg:!col-span-2"
          onClick={() => sendTelemetryEvent(name)}
        />
        <Card
          url={Solutions['edge-functions'].url}
          title={Solutions['edge-functions'].name}
          subtitle={Solutions['edge-functions'].description}
          onClick={() => sendTelemetryEvent(name)}
          image={
            <div className="absolute inset-0 z-0">
              <motion.div className="absolute inset-0 z-10" variants={opacityVariant}>
                <Image
                  src="/images/index/edge-dark-hover.jpg"
                  alt="Supabase Edge Functions feature, hover image with glow"
                  layout="fill"
                  objectPosition={isSm ? 'bottom' : '50% 50%'}
                  objectFit={isSm ? 'contain' : 'cover'}
                  quality={100}
                />
              </motion.div>
              <Image
                src="/images/index/edge-dark.jpg"
                alt="Supabase Edge Functions feature"
                layout="fill"
                objectPosition={isSm ? 'bottom' : '50% 50%'}
                objectFit={isSm ? 'contain' : 'cover'}
                quality={100}
              />
            </div>
          }
        />
      </dl>
      <BackedBy className="pt-8" layout="horizontal" />
    </SectionContainer>
  )
}

export default Features
