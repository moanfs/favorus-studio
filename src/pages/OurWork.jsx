import Section from "../components/section"
import Main from "../layout/Main"

const OurWork = () =>{
    return(
    <Main>
        
        <div className="h-fit py-20 animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 bg-fixed">
        <Section sectionClassName="overflow-hidden">
            <div className="px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24  flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row mx-auto">
                    <div> 
                        <img src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom" alt="#_"/> 
                    </div>
                    <div> 
                        <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom" alt="#_"/> 
                    </div>
                    <div> 
                        <img src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom" alt="#_"/> 
                    </div>
                    <div> 
                        <img src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom" alt="#_"/> 
                    </div>
                 </div> 
            </div>

            <div className="pointer-events-none sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
                <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="flex w-0 flex-1 items-center p-4">
                        <div className="w-full">
                            <p className="text-lg font-medium text-neutral-900">Explore Gallery</p>
                            <p className="mt-1 text-sm text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, corrupti?</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </Section>
        </div>
        
        <Section>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-16 place-items-center *:shadow">
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=1"/>
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=2"/>
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=3"/>
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=4"/>
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=5"/>
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=6"/>
                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/250x250?sig=7"/>
            </div>
        </Section>
        
    </Main>
    )
}
export default OurWork