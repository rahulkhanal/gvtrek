// import { Center } from '@mantine/core'
// import React from 'react'
// import Lottie from 'react-lottie'
// import * as animationData from '../../404.json'

// export default function Custom404() {
//     // Lottifie
//     // const defaultOptions = {
//     //     loop: true,
//     //     autoplay: true,
//     //     animationData: animationData,
//     //     rendererSettings: {
//     //         preserveAspectRatio: 'xMidYMid slice'
//     //     }
//     // };
//     return (
//         <Center>
//             {/* <Lottie options={defaultOptions} height={250} width={200} style={{ marginTop: "100px" }} /> */}
//         </Center>
//     )
// }

"use client";
import * as animationData from '../../404.json'
import { Center, Flex, Text } from '@mantine/core';
import Lottie from 'react-lottie';
import Link from 'next/link';

export default function Custom404() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default || animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Center>
            <Flex direction='column' align='center' justify='center' mt={'xl'}>
                <Lottie options={defaultOptions} style={{maxWidth: '800px'}} />
                <Text ta='center'>The page you are looking for is either not found or has been moved.</Text>
                <Text>Please click <Link href="/">here</Link> to go back to home page.</Text>
            </Flex>
        </Center>
    );
}
