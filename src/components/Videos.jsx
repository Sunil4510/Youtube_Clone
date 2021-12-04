import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Videos.css'
const Videos = ({title,image1,image2,views,timestamp,channel}) => {
    return (
        <>
        <div className="Videos_scroll flex flex-wrap mt-3">
            <div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
                <img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
                    <div className="flex items-center justify-evenly mt-2">
                        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
                        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
                        <MoreVertIcon className="Videos_more"/>
                    </div>

                    <div className="mt-2 ml-10">      
                        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
                            <div>
                                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
                            </div>
                    </div>
            </div>
            <div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
            <img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
                <div className="flex items-center justify-evenly mt-2">
                    <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
                    <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
                    <MoreVertIcon className="Videos_more"/>
                </div>

                <div className="mt-2 ml-10">      
                    <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
                        <div>
                            <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
                        </div>
                </div>
        </div>
        <div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
        <img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
            <div className="flex items-center justify-evenly mt-2">
                <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
                <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
                <MoreVertIcon className="Videos_more"/>
            </div>

            <div className="mt-2 ml-10">      
                <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
                    <div>
                        <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
                    </div>
            </div>
    </div>
    <div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
    <img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
        <div className="flex items-center justify-evenly mt-2">
            <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
            <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
            <MoreVertIcon className="Videos_more"/>
        </div>

        <div className="mt-2 ml-10">      
            <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
                <div>
                    <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
                </div>
        </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>
<div className="videos ml-7 cursor-pointer flex flex-col w-72 h-72">
<img src="https://i.ytimg.com/vi/70tx7KcMROc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBO1o8bIgcH9AdXxWzhlAxYjxDPQ" alt="imagess"/>
    <div className="flex items-center justify-evenly mt-2">
        <Avatar src="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj" className="header_avatar cursor-pointer"/>
        <h1 className="text-sm sm:text-xs ml-2 font-semibold">Linked List Interview Questions - Google,Facebook,Twitter,...</h1>
        <MoreVertIcon className="Videos_more"/>
    </div>

    <div className="mt-2 ml-10">      
        <h1 className="text-gray-600 font-semibold sm:text-xs">Kunal Kushwaha</h1>
            <div>
                <h1 className="text-gray-600 font-semibold sm:text-xs">7.5K views . 16 hours ago</h1>
            </div>
    </div>
</div>

        </div> 
        </>
    )
}

export default Videos
