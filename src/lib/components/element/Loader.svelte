<div id="loader" class="sprout-loader">
  <div class="sprout"></div>
  <div class="leaf left"></div>
  <div class="leaf right"></div>
</div>

<style>
  /* sprout loader animation */

  .sprout-loader {
    display: flex;
    width: 25px;
    height: 25px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-75%, -75%);
  }

  .sprout {
    background-color: #31af31;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: growSprout 2s linear infinite;
  }

  .leaf {
    background-color: #31af31;
    width: 15px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    bottom: 12px;
    opacity: 0;
    animation: growLeaf 2s linear infinite;
  }

  .leaf.left {
    transform: rotate(-25deg);
    left: 12px;
  }

  .leaf.right {
    transform: rotate(45deg);
    right: 12px;
  }

  @keyframes growSprout {
    0% { height: 5px; }
    50% { height: 11px; }
    100% { height: 11px; }
  }

  @keyframes growLeaf {
    0%, 50% { opacity: 0; }
    75% { opacity: 1; }
    100% { opacity: 1; }
  }
</style>