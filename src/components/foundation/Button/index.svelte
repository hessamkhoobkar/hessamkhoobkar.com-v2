<script lang="ts">
  import ButtonType from './ButtonType.svelte'
  import ActionLoading from '@/assets/icons/actionLoading.svelte'

  // TODO:
  // Add Loading text in V2
  // Add icon dynamic sizeing realtive to selceted size
  // Add icon fix by flex order
  // Finish color and varient styles

  let klass = ''
  export { klass as class }

  export let icon: any | null = null
  export let iconFix: 'prefix' | 'suffix' = 'prefix'
  export let loading: boolean = false
  export let disabled: boolean = false
  export let text: string
  export let href: string | null = null
  export let target: '_blank' | '_self' = '_self'
  export let size: 'small' | 'medium' | 'large' = 'medium'
  export let variant: 'filled' | 'tonal' | 'outline' | 'text' = 'filled'
  export let color: 'primary' | 'secondary' | 'success' | 'danger' | 'plain' = 'primary'
  export let type: 'button' | 'submit' | 'reset' = 'button'

  // Styling & Classes
  // Base style for all buttons
  let baseStyle =
    'inline-flex justify-center items-center rounded-md border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-150'

  // Size Classes & icon sizes
  $: btnSize =
    size === 'small'
      ? 'text-sm h-10 min-w-26 py-[0.625rem] px-6'
      : size === 'large'
      ? 'text-lg h-14 min-w-58 py-4 px-10'
      : 'text-base h-12 min-w-40 py-3 px-6'

  $: iconSize = size === 'small' ? '16' : size === 'large' ? '24' : '20'

  // Variant & Color Classes
  let variantStyle: string
  $: switch (true) {
    case variant === 'filled' && color === 'primary':
      variantStyle =
        'text-white bg-blue hover:bg-blue-50 focus:bg-blue-50 active:bg-blue-70 focus:ring-blue disabled:(bg-[#9494A9] bg-opacity-100 text-white cursor-not-allowed)'
      break

    case variant === 'tonal' && color === 'secondary':
      variantStyle =
        'bg-blue bg-opacity-10 text-blue hover:text-blue-50 focus:text-blue-50 active:text-blue-70 focus:ring-blue disabled:(bg-[#9494A9] bg-opacity-100 text-white cursor-not-allowed)'
      break

    case variant === 'text' && color === 'plain':
      variantStyle =
        'bg-blue bg-opacity-0 text-blue-90 dark:text-white hover:(text-blue bg-opacity-5) focus:text-blue active:text-blue-50 focus:ring-blue'
      break

    default:
      variantStyle = ''
      break
  }
</script>

<ButtonType
  on:click
  class="{baseStyle} {variantStyle} {btnSize} {klass}"
  {href}
  {target}
  {disabled}
  {type}
>
  {#if loading}
    <ActionLoading />
  {:else}
    {#if icon !== null}
      <span class={iconFix === 'prefix' ? 'mr-1' : 'order-2 ml-1'}>
        <svelte:component this={icon} size={iconSize} />
      </span>
    {/if}
    <span class="font-bold transition-colors duration-100">{text}</span>
  {/if}
</ButtonType>
