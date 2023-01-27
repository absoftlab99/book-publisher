import React from 'react';
import book from '../../assets/book.jpg';
import book2 from '../../assets/book2.png';
import book3 from '../../assets/book3.png';
import book4 from '../../assets/book4.jpg';
import book5 from '../../assets/book5.jpg';

const BookCard = () => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-10 gap-5 md:gap-8'>
                {/* book one  */}
                <div className="col-span-10 md:col-span-2">
                    <div className="card bg-base-100 shadow-xl image-full hover:bg-none">
                        <figure className='h-full md:h-96'><img src={book} alt="book" /></figure>
                        <div className="card-body">
                            <div className='btn btn-circle border-dashed border-black border-[1px] btn-warning p-1'><i class="fa-solid fa-bolt"></i> 40%</div>
                            <p></p>
                            <div className="grid grid-cols-1 place-items-start gap-3">
                                <div className="tooltip tooltip-right tooltip-accent" data-tip="Add to Cart">
                                    <button className='btn btn-accent btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-cart-plus"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-primary" data-tip="Buy Now">
                                    <button className='btn btn-primary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-dolly"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-secondary" data-tip="Quick View">
                                    <button className='btn btn-secondary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* book Two  */}
                <div className="col-span-10 md:col-span-2">
                    <div className="card bg-base-100 shadow-xl image-full hover:bg-none">
                        <figure className='h-full md:h-96'><img src={book2} alt="book" /></figure>
                        <div className="card-body">
                            <div className='btn btn-circle border-dashed border-black border-[2px] btn-warning p-1'><i class="fa-solid fa-bolt"></i> 40%</div>
                            <p></p>
                            <div className="grid grid-cols-1 place-items-start gap-3">
                                <div className="tooltip tooltip-right tooltip-accent" data-tip="Add to Cart">
                                    <button className='btn btn-accent btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-cart-plus"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-primary" data-tip="Buy Now">
                                    <button className='btn btn-primary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-dolly"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-secondary" data-tip="Quick View">
                                    <button className='btn btn-secondary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* book Three  */}
                <div className="col-span-10 md:col-span-2">
                    <div className="card bg-base-100 shadow-xl image-full hover:bg-none">
                        <figure className='h-full md:h-96'><img src={book3} alt="book" /></figure>
                        <div className="card-body">
                            <div className='btn btn-circle border-dashed border-black border-[2px] btn-warning p-1'><i class="fa-solid fa-bolt"></i> 40%</div>
                            <p></p>
                            <div className="grid grid-cols-1 place-items-start gap-3">
                                <div className="tooltip tooltip-right tooltip-accent" data-tip="Add to Cart">
                                    <button className='btn btn-accent btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-cart-plus"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-primary" data-tip="Buy Now">
                                    <button className='btn btn-primary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-dolly"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-secondary" data-tip="Quick View">
                                    <button className='btn btn-secondary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* book Four  */}
                <div className="col-span-10 md:col-span-2">
                    <div className="card bg-base-100 shadow-xl image-full hover:bg-none">
                        <figure className='h-full md:h-96'><img src={book4} alt="book" /></figure>
                        <div className="card-body">
                            <div className='btn btn-circle border-dashed border-black border-[2px] btn-warning p-1'><i class="fa-solid fa-bolt"></i> 40%</div>
                            <p></p>
                            <div className="grid grid-cols-1 place-items-start gap-3">
                                <div className="tooltip tooltip-right tooltip-accent" data-tip="Add to Cart">
                                    <button className='btn btn-accent btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-cart-plus"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-primary" data-tip="Buy Now">
                                    <button className='btn btn-primary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-dolly"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-secondary" data-tip="Quick View">
                                    <button className='btn btn-secondary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* book Five  */}
                <div className="col-span-10 md:col-span-2">
                    <div className="card bg-base-100 shadow-xl image-full hover:bg-none">
                        <figure className='h-full md:h-96'><img src={book5} alt="book" /></figure>
                        <div className="card-body">
                            <div className='btn btn-circle border-dashed border-black border-[2px] btn-warning p-1'><i class="fa-solid fa-bolt"></i> 40%</div>
                            <p></p>
                            <div className="grid grid-cols-1 place-items-start gap-3">
                                <div className="tooltip tooltip-right tooltip-accent" data-tip="Add to Cart">
                                    <button className='btn btn-accent btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-cart-plus"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-primary" data-tip="Buy Now">
                                    <button className='btn btn-primary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-dolly"></i></button>
                                </div>
                                <div className="tooltip tooltip-right tooltip-secondary" data-tip="Quick View">
                                    <button className='btn btn-secondary btn-circle border-0 bg-opacity-90'><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookCard;