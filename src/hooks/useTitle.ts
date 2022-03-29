import {unref, watch} from 'vue';
import {useRouter} from 'vue-router';

/**
 * Listening to page changes and dynamically changing site titles
 */
export function useTitle() {
    const { currentRoute } = useRouter();

    watch(
        [() => currentRoute.value.path],
        () => {
            const route = unref(currentRoute);
            document.title = route?.meta?.title as string;
        },
        { immediate: true },
    );
}
