import { FingerPrintIcon } from "@heroicons/react/24/solid"
import { Typography } from "@material-tailwind/react"

const About = () => {
  return (
            <div className="container mx-auto pt-20">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                About Us
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We are a passionate team of innovators dedicated to transforming
              the way businesses operate through cutting-edge AI technology. Our
              mission is to develop intuitive SaaS tools that simplify complex
              processes, enhance productivity, and drive efficiency.
              </Typography>
            </div>

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Our Vision
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Our vision is to lead the way in AI-driven innovation, making
              advanced technology accessible to all businesses. We aim to create
              intelligent tools that not only streamline operations but also
              foster innovation and growth.
              </Typography>
            </div>

          </div>
        </div>
  )
}

export default About