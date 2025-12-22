import { DigitalProductT } from '@/app/(sites)/extras/index11/page'
import WishListButton from '@/components/ui/button/WishListButton'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { ShoppingCart, Zap } from 'lucide-react'
import BoxPrice from '@/components/features/product/components/BoxPrice'

function DigitalProduct({ item }: { item: DigitalProductT }) {
    return (
        <div className="product-theme-box"
            style={{
                padding: "10px",
                border: "1px solid #eee",
                borderRadius: "calc(10px + 5 * (100vw - 320px) / 1600)",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#fff",
            }}
        >
            <div className="label-tag"
                style={{
                    position: "absolute",
                    top: 24,
                    left: -62,
                    padding: "5px 8px",
                    fontSize: "14px",
                    color: "#fff",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    transition: "all .3s ease-in-out",
                    zIndex: 1,
                    background: "linear-gradient(to right, var(--theme-color), var(--theme-color2))",


                }}
            >
                <span>Trending</span>
                <i>
                    <Zap />
                </i>
            </div>
            <div className="img-box ratio_50">
                <a href={item.productPageLink}
                    style={{
                        backgroundImage: `url(${item.imageSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        position: "relative",
                        width: "100%",
                        aspectRatio: "89/45",
                        borderRadius: "10px"
                    }}
                >
                    <ImageError src={item.imageSrc} alt={item.title} width={200} height={200} className='d-none' />
                </a>
                <a className="heart-icon"
                    style={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        color: "#fff",
                        width: 35,
                        height: 35,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, .52)",
                        borderRadius: "100%",
                    }}
                >
                    <WishListButton productId={Number.parseInt(item.id)}></WishListButton>
                </a>
            </div>
            <div className="content-box mt-2">
                <div className="top-content">
                    <a href="product-digital.html">
                        <h5
                            style={{
                                fontWeight: "600",
                                color: "#222",
                                marginBottom: "4px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >{item.title}</h5>
                    </a>
                    <div className="d-flex align-items-center justify-content-between">
                        <h6
                            style={{
                                color: "#999",
                            }}
                        >by <a href="#!"> {item.author}</a> in <a href="#!">{item.category}</a></h6>
                        <CustomRating rating={item.rating} numberOfRatings={item.numOfRatings || 0}></CustomRating>
                    </div>
                </div>
                <div className="bottom-content"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginTop: "calc(12px + 3 * (100vw - 320px) / 1600)",
                    }}
                >
                    <div>
                        <span style={{
                            color: "#999",
                            fontSize: "calc(13px + 1 * (100vw - 320px) / 1600)",
                        }}>{item.sales} Sales</span>
                        <BoxPrice price={item.price}></BoxPrice>
                    </div>
                    <div className="btn-grp"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                        }}
                    >
                        <a className="btn btn-outline"
                            style={{
                                padding: "5px calc(11px + 4 * (100vw - 320px) / 1600)",
                                border: "1px solid var(--theme-color)",
                                color: "var(--theme-color) !important",
                                fontSize: 14,
                                height: "calc(34px + 4 * (100vw - 320px) / 1600)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <ShoppingCart strokeWidth={1} />
                        </a>
                        <a className="btn"
                            style={{
                                padding: "5px calc(11px + 4 * (100vw - 320px) / 1600)",
                                border: "1px solid var(--theme-color)",
                                color: "var(--theme-color) !important",
                                fontSize: 14,
                                height: "calc(34px + 4 * (100vw - 320px) / 1600)",
                            }}
                            href="product-digital.html">Preview</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalProduct