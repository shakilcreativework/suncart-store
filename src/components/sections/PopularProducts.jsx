import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";

const PopularProducts = () => {
    return (
        <div className="py-20">
            <Container>
                <SectionTitle paraTitle={'Trending Now'} HeadingTitle={'Popular this summer'}  />
            </Container>
        </div>
    );
};

export default PopularProducts;