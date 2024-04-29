import { Component, createEffect, Suspense } from "solid-js";
import { useRouteData } from "@solidjs/router";
import { Command, Landmark } from "lucide-solid";

export default function About() {
    return (
        <div class='h-[820px] flex flex-col items-center justify-center px-32 w-screen background-dots gap-8'>
            <div class='flex flex-col items-start justify-center gap-8 w-full'>
                <h1 class='text-6xl text-white w-fit font-medium'>About</h1>
                <p class='text-md text-white font-mono'>
                    <b class='underline-offset-4'>Authors</b> <br />
                    Bingsong Lee, Juan De Maqua,
                    <br />
                    Daniel Wei, Anthony Huang
                </p>
                <p class='text-md text-white font-mono'>
                    <b class='underline-offset-4'>Developed for</b> <br />
                    INFO 4300: Language and Information <br />
                    Cornell University, Spring 2024.
                </p>
                <p class='text-md text-white font-mono'>
                    <b class='underline-offset-4'>Created with</b> <br />
                    Python, MySQL,
                    <br />
                    Solid.js, Tailwind CSS.
                </p>
            </div>
        </div>
    );
}
