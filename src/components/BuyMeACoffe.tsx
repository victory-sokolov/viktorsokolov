import Image from "next/image";
import styled from "styled-components";

const BuyMeCoffeWrapper = styled.div`
    margin-top: 1rem;
`;

export const BuyMeACoffe = () => {
    return (
        <BuyMeCoffeWrapper>
            <a href="https://www.buymeacoffee.com/vikctorysokolov" target="_blank" rel="noreferrer">
                <Image
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    height={50}
                    width={200}
                />
            </a>
        </BuyMeCoffeWrapper>
    );
};
