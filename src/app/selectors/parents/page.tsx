export default function Page() {
    return (
        <div>


            {/* div>div*3>h3{Title $}+ul>li*3{text} */}
            <div className="m-10 grid gap-5">
                
                How to select list elements knowing only section title?
                
                <div className="banana-wrapping">
                    <h3>Title 1</h3>
                    {/* <span></span> */}

                    <ul className="ps-5">
                        <li className="banana">text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
                <div>
                    <h3>Title 2</h3>
                    <ul className="ps-5">
                        <li>text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
                <div>
                    <h3>Title 3</h3>
                    <ul className="ps-5">
                        <li>text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}