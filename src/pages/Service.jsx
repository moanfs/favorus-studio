import Main from "../layout/Main"
import Section from "../components/section";

const Service = () =>{
    return(
    <Main>
        <div className="h-fit pt-20 animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 bg-fixed">
        <Section sectionClassName="text-center  py-20">
            <h1 className="text-3xl leading-[52px] font-semibold md:text-4xl lg:text-5xl text-white ">Discover the power of 
            <span className="bg-purple-600 text-[#fff] p-0.5 rounded-lg ms-2">creative inspiration</span> online<br />
            <div className="sm:mt-2">
                <span className="underline decoration-purple-600 underline-offset-4">
                    Explore a world of design
                    possibilities
                </span>
            </div>
            </h1>
            <p className="mt-4 text-lg font-medium leading-2 text-gray-600 md:text-xl">Unleash your creativity with access
            to a
            vast collection of website screenshots, code snippets, and more at UI Shots.</p>
        </Section>
        </div>

        <Section sectionClassName="mx-auto py-16">
            <div className="mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                <div className="lg:w-[50%] xs:w-full">
                    <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
                </div>
                <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md">
                    <h2 className="text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur</h2>
                    <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligend sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuganobis tempora possimus ullam!</p>
                </div>
            </div>
    
            <div className="mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
                <div className="md:hidden sm:block xs:block xs:w-full">
                    <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
                </div>
                <div className="lg:w-[50%] xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md">
                    <h2 className="text-3xl font-semibold ">Lorem ipsum dolor sit amet consectetur</h2>
                    <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuganobis tempora possimus ullam!</p>
                </div>
                <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
                    <img className="lg:rounded-t-lg xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
                </div>
            </div>
        </Section>
    </Main>
    )
}
export default Service