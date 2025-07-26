import { Portal } from "@/components/layouts";
import { AbsoluteContainer } from "@/components/styled-components";
import { ModalContainer } from "@/components/ui";
import { useCart } from "@/hooks";
import { IoIosArrowDown } from "react-icons/io";

export default function Cart ({ close }: { close: () => void }) {
    const { 
        cartItems, 
        totalPrice, 
        removeFromCart, 
        checkout 
    } = useCart(close)

    return (
        <Portal>
            <ModalContainer
                close={close}
                title="Your Order"
            >
                {
                    !!cartItems.length ?
                        (
                            <div className="p-8 pb-[80px] overflow-auto h-full" data-testid="cart-item-container">
                                <div className="mt-2">
                                    <h4 className="text-[21px] font-[600]">
                                        This is a pickup order
                                    </h4>
                                    <p className="text-[16px] text-[rgba(0,0,0,0.8)] mt-2">
                                        You'll need to go to the Kings Family Restaurant to pickup the order.
                                    </p>
                                </div>
                                <div className="flex justify-between gap-4 border border-[rgba(0,0,0,0.3)] p-6 mt-[20px] min-h-[60px] items-center">
                                    <p className="text-[16px]">
                                        Pickup at 
                                        <a className="underline text-[#09E9E1] pl-2" href="#">191 New Castle Road</a>
                                    </p>
                                    <IoIosArrowDown fontSize='20px' />
                                </div>
                                <div className="mt-8">
                                    { cartItems?.map((cartItem, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="py-4 flex gap-4 flex-wrap items-center justify-between border-b border-b-[rgba(0,0,0,0.3)]"
                                            >
                                                <div className="flex gap-8">
                                                    <div>
                                                        <div className="w-[70px] rounded-[4px] bg-[#F0F4F8] py-2 px-2 flex justify-between items-center gap-4">
                                                            <p className="text-[18px] font-[700]">{cartItem.quantity}</p>
                                                            <IoIosArrowDown className="mr-3 text-18px[]" />
                                                        </div>
                                                        <p 
                                                            className="text-[red] text-[14px] cursor-pointer hover:text-gray-500 mt-4"
                                                            onClick={() => removeFromCart(cartItem.cartId)}
                                                        >
                                                            Remove
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[700] text-[20px]">{cartItem.item.title}</p>
                                                        { !!cartItem.selectedCheeses?.length &&
                                                            <p className="text-[12px] pt-2">{cartItem.selectedCheeses.join(', ')}</p>
                                                        }
                                                        { cartItem.eggStyle &&
                                                            <p className="text-[12px] pt-2">{cartItem.eggStyle}</p>
                                                        }
                                                    </div>
                                                </div>
                                                <p className="text-[18px] font-[700]">${cartItem.item.price}</p>
                                            </div>
                                        )
                                    })

                                    }
                                </div>
                            </div>
                        )
                        :
                            <p className="text-center text-[20px] font-[500] mt-8" data-testid="no-cart-item-text">No Cart Items</p>
                }

                { !!cartItems.length &&
                    <AbsoluteContainer
                        $bottom="0" $left="0"
                        width="100" $wUnit="%"
                        onClick={checkout}
                    >
                        <div className="h-[80px] bg-[white] flex justify-center items-center py-6 px-8">
                            <button className="w-[100%] md:w-[350px] h-[50px] rounded-[8px] bg-[#09E9E1] gap-6 cursor-pointer hover:bg-gray-600 hover:text-[white]">
                                <div className="flex justify-between px-10">
                                    <p className="font-[600] text-[16px]">Checkout</p>
                                    <p className="font-[600] text-[16px]">${totalPrice?.toFixed(2)}</p>
                                </div>
                            </button>
                        </div>
                    </AbsoluteContainer>
                }
            </ModalContainer>
        </Portal>
    )
}