import React from 'react'

const Pagination = () => {
    return (
        <div>
            <div className="pagination p1">
                <ul>
                    <a href="#"><li>&lt;</li></a>
                    <a className="is-active" href="#"><li>1</li></a>
                    <a href="#"><li>2</li></a>
                    <a href="#"><li>3</li></a>
                    <a href="#"><li>4</li></a>
                    <a href="#"><li>5</li></a>
                    <a href="#"><li>6</li></a>
                    <a href="#"><li>&gt;</li></a>
                </ul>
            </div>
        </div>

    )
}

export default Pagination;
