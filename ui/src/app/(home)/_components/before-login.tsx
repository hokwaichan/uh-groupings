import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import UHGroupingsInfo from '@/components/uh-groupings-info';

const BeforeLogin = () => (
    <main className="bg-seafoam pb-10">
        <UHGroupingsInfo size='lg'/>
        <div className="row">
            <div className="text-center">
                <a href="https://uhawaii.atlassian.net/wiki/spaces/UHIAM/pages/13403213/UH+Groupings">
                    <Button size="lg" variant="default">
                            Learn More <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
                    </Button>
                </a>
            </div>
        </div>
    </main>
);

export default BeforeLogin;
