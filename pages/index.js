import Container from '@/components/Container'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div className="fixed bg-blue-200 w-full z-20">
                <Link href={'/#three'}>three</Link>
            </div>

            <div className="flex flex-col w-full bg-gray-500 gap-4 pt-10">
                <Container>
                    <div className="bg-red-400 h-96" id="one">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-blue-400 h-96" id="two">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-cyan-400 h-96" id="three">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-indigo-400 h-96" id="four">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-pink-400 h-96" id="five">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-rose-400 h-96" id="six">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-orange-400 h-96" id="seven">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-teal-400 h-96" id="eight">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-green-400 h-96" id="nine">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-violet-400 h-96" id="ten">
                        aa
                    </div>
                </Container>
                <Container>
                    <div className="bg-cyan-400 h-96">aa</div>
                </Container>
                <Container>
                    <div className="bg-red-400 h-96">aa</div>
                </Container>
            </div>
        </div>
    )
}
