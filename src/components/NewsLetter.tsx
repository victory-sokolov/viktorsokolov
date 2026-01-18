"use client";

const NewsLetterForm = () => {
    return (
        <div className="border-gradient my-14 mb-8 h-[250px]">
            <iframe
                title="Embedded Substack email subscription form"
                src="https://viktorsokolov.substack.com/embed"
                height="320"
                style={{
                    border: "none",
                    background: "#fff",
                    height: "100%",
                    width: "100%",
                }}
            ></iframe>
        </div>
    );
};

export default NewsLetterForm;
