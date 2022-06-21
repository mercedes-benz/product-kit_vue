<!-- SPDX-License-Identifier: MIT -->

<template>
    <ExampleWrapper>
        <v-subheader>Playground</v-subheader>
        <Playground />
        <v-subheader>Creating rules</v-subheader>
        <CreatingRules />
        <v-subheader>Validation with submit & clear</v-subheader>
        <ValidationWithSubmitAndClear />
    </ExampleWrapper>
</template>

<script>
import ExampleWrapper from "./ExampleWrapper";
import Playground from "./forms/Playground";
import CreatingRules from "./forms/CreatingRules";
import ValidationWithSubmitAndClear from "./forms/ValidationWithSubmitAndClear";

export default {
    name: "Forms",

    components: {
        ExampleWrapper,
        Playground,
        CreatingRules,
        ValidationWithSubmitAndClear,
    },

    data: () => ({}),
};
</script>