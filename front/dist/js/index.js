function Banner(){console.log("----loop----"),this.index=1,this.arrowleft=$(".arrows-left"),this.arrowright=$(".arrows-right"),this.bannergroup=$("#banner-group"),this.bannerul=$("#banner-ul"),this.lilist=this.bannerul.children("li"),this.bannercount=this.lilist.length,console.log(this.bannercount),this.pagecontrol=$(".page-control")}Banner.prototype.initbanner=function(){var n=this,t=n.lilist.eq(0).clone(),e=n.lilist.eq(n.bannercount-1).clone();n.bannerul.append(t),n.bannerul.prepend(e),n.bannerul.css({width:798*(n.bannercount+2),left:-798})},Banner.prototype.toggleArrow=function(n){n?(this.arrowleft.show(),this.arrowright.show()):(this.arrowleft.hide(),this.arrowright.hide())},Banner.prototype.animate=function(){var n=this;n.bannerul.animate({left:-798*n.index},500);var t=n.index;t=0===t?n.bannercount-1:t===n.bannercount+1?0:n.index-1,n.pagecontrol.children("li").eq(t).addClass("active").siblings().removeClass("active")},Banner.prototype.initpagecontrol=function(){for(var n=this,t=0;t<n.bannercount;t++){var e=$("<li></li>");n.pagecontrol.append(e),n.pagecontrol.css({width:12*n.bannercount+16+16*(n.bannercount-1)})}},Banner.prototype.listenpagecontrol=function(){var e=this;e.pagecontrol.children("li").each(function(n,t){$(t).click(function(){e.index=n+1,e.animate()})})},Banner.prototype.listenArrowClick=function(){var n=this;n.arrowleft.click(function(){0===n.index?(n.bannerul.css({left:798*n.bannercount}),n.index=n.bannercount-1):n.index--,n.animate()}),n.arrowright.click(function(){n.index===n.bannercount+1?(n.bannerul.css({left:-798}),n.index=2):n.index++,n.animate()})},Banner.prototype.listenbannerhover=function(){var n=this;this.bannergroup.hover(function(){clearInterval(n.timer),n.toggleArrow(!0)},function(){n.loop(),n.toggleArrow(!1)})},Banner.prototype.loop=function(){var n=this;console.log("----loop----"),this.timer=setInterval(function(){n.index>=n.bannercount+1?(n.bannerul.css({left:-798}),n.index=2):n.index++,n.animate()},2e3)},Banner.prototype.run=function(){this.initbanner(),this.initpagecontrol(),this.loop(),this.listenArrowClick(),this.listenpagecontrol(),this.listenbannerhover()},$(function(){(new Banner).run()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJhbm5lciIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzIiwiaW5kZXgiLCJhcnJvd2xlZnQiLCIkIiwiYXJyb3dyaWdodCIsImJhbm5lcmdyb3VwIiwiYmFubmVydWwiLCJsaWxpc3QiLCJjaGlsZHJlbiIsImJhbm5lcmNvdW50IiwibGVuZ3RoIiwicGFnZWNvbnRyb2wiLCJwcm90b3R5cGUiLCJpbml0YmFubmVyIiwic2VsZiIsImZpcnN0bGkiLCJlcSIsImNsb25lIiwibGFzdGxpIiwiYXBwZW5kIiwicHJlcGVuZCIsImNzcyIsIndpZHRoIiwibGVmdCIsInRvZ2dsZUFycm93IiwiaXNTaG93Iiwic2hvdyIsImhpZGUiLCJhbmltYXRlIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiaW5pdHBhZ2Vjb250cm9sIiwiaSIsImNpcmNsZSIsImxpc3RlbnBhZ2Vjb250cm9sIiwiZWFjaCIsIm9iaiIsImNsaWNrIiwibGlzdGVuQXJyb3dDbGljayIsImxpc3RlbmJhbm5lcmhvdmVyIiwiaG92ZXIiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJsb29wIiwic2V0SW50ZXJ2YWwiLCJydW4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQ0xDLFFBQVFDLElBQUksZ0JBQ1pDLEtBQUtDLE1BQVEsRUFDYkQsS0FBS0UsVUFBWUMsRUFBRSxnQkFDbkJILEtBQUtJLFdBQWFELEVBQUUsaUJBQ3BCSCxLQUFLSyxZQUFjRixFQUFFLGlCQUNyQkgsS0FBS00sU0FBV0gsRUFBRSxjQUNsQkgsS0FBS08sT0FBU1AsS0FBS00sU0FBU0UsU0FBUyxNQUNyQ1IsS0FBS1MsWUFBY1QsS0FBS08sT0FBT0csT0FDL0JaLFFBQVFDLElBQUlDLEtBQUtTLGFBQ2pCVCxLQUFLVyxZQUFjUixFQUFFLGlCQU16Qk4sT0FBT2UsVUFBVUMsV0FBYSxXQUUxQixJQUFJQyxFQUFPZCxLQUNQZSxFQUFVRCxFQUFLUCxPQUFPUyxHQUFHLEdB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XG4gICAgY29uc29sZS5sb2coXCItLS0tbG9vcC0tLS1cIik7XG4gICAgdGhpcy5pbmRleCA9IDE7XG4gICAgdGhpcy5hcnJvd2xlZnQgPSAkKFwiLmFycm93cy1sZWZ0XCIpO1xuICAgIHRoaXMuYXJyb3dyaWdodCA9ICQoXCIuYXJyb3dzLXJpZ2h0XCIpO1xuICAgIHRoaXMuYmFubmVyZ3JvdXAgPSAkKFwiI2Jhbm5lci1ncm91cFwiKTtcbiAgICB0aGlzLmJhbm5lcnVsID0gJChcIiNiYW5uZXItdWxcIik7XG4gICAgdGhpcy5saWxpc3QgPSB0aGlzLmJhbm5lcnVsLmNoaWxkcmVuKFwibGlcIik7XG4gICAgdGhpcy5iYW5uZXJjb3VudCA9IHRoaXMubGlsaXN0Lmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJhbm5lcmNvdW50KTtcbiAgICB0aGlzLnBhZ2Vjb250cm9sID0gJChcIi5wYWdlLWNvbnRyb2xcIik7XG5cblxuXG59XG4vLyDliqjmgIHorr7nva5iYW5uZXJ1bOWuveW6plxuQmFubmVyLnByb3RvdHlwZS5pbml0YmFubmVyID0gZnVuY3Rpb24oKXtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZmlyc3RsaSA9IHNlbGYubGlsaXN0LmVxKDApLmNsb25lKCk7XG4gICAgdmFyIGxhc3RsaSA9IHNlbGYubGlsaXN0LmVxKHNlbGYuYmFubmVyY291bnQgLSAxKS5jbG9uZSgpO1xuICAgIHNlbGYuYmFubmVydWwuYXBwZW5kKGZpcnN0bGkpO1xuICAgIHNlbGYuYmFubmVydWwucHJlcGVuZChsYXN0bGkpO1xuICAgIHNlbGYuYmFubmVydWwuY3NzKHtcIndpZHRoXCI6IChzZWxmLmJhbm5lcmNvdW50ICsyKSAqIDc5OCwgXCJsZWZ0XCI6LTc5OH0pO1xuXG59O1xuLy8g5bem5Y+z566t5aS0XG5CYW5uZXIucHJvdG90eXBlLnRvZ2dsZUFycm93ID0gZnVuY3Rpb24oaXNTaG93KXtcblxuICAgIGlmKGlzU2hvdyl7XG4gICAgICAgIHRoaXMuYXJyb3dsZWZ0LnNob3coKTtcbiAgICAgICAgdGhpcy5hcnJvd3JpZ2h0LnNob3coKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5hcnJvd2xlZnQuaGlkZSgpO1xuICAgICAgICB0aGlzLmFycm93cmlnaHQuaGlkZSgpO1xuICAgIH1cbn07XG4vLyDlvqrnjq/mmL7npLrlm77niYdcbkJhbm5lci5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuYmFubmVydWwuYW5pbWF0ZSh7XCJsZWZ0XCI6LTc5OCAqICBzZWxmLmluZGV4fSwgNTAwICk7XG4gICAgdmFyIGluZGV4ID0gc2VsZi5pbmRleDtcbiAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICAgIGluZGV4ID0gc2VsZi5iYW5uZXJjb3VudCAtIDE7XG4gICAgfWVsc2UgaWYoaW5kZXggPT09IHNlbGYuYmFubmVyY291bnQgKyAxKXtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgIH1lbHNlIHtcbiAgICAgICAgaW5kZXggPSBzZWxmLmluZGV4IC0gMTtcbiAgICB9XG4gICAgc2VsZi5wYWdlY29udHJvbC5jaGlsZHJlbihcImxpXCIpLmVxKGluZGV4KS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufTtcbi8vIOa3u+WKoOWchuWciFxuQmFubmVyLnByb3RvdHlwZS5pbml0cGFnZWNvbnRyb2wgPSBmdW5jdGlvbigpe1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIHZhciBwYWdlY29udHJvbCA9ICQoXCIucGFnZS1jb250cm9sXCIpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxmLmJhbm5lcmNvdW50O2krKyl7XG4gICAgICAgIHZhciBjaXJjbGUgPSAkKFwiPGxpPjwvbGk+XCIpO1xuICAgICAgICBzZWxmLnBhZ2Vjb250cm9sLmFwcGVuZChjaXJjbGUpO1xuICAgICAgICAvLyBjaXJjbGUuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIC8vIGlmKGkgPT09IDApIHtcbiAgICAgICAgLy8gICAgIGNpcmNsZS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBzZWxmLnBhZ2Vjb250cm9sLmNzcyh7XCJ3aWR0aFwiOiBzZWxmLmJhbm5lcmNvdW50ICogMTIgKyA4ICogMiArIDE2ICogKHNlbGYuYmFubmVyY291bnQgLTEpfSk7XG4gICAgfVxuXG59O1xuLy8g5ZyG5ZyI54K55Ye75LqL5Lu2XG5CYW5uZXIucHJvdG90eXBlLmxpc3RlbnBhZ2Vjb250cm9sID0gZnVuY3Rpb24oKXtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLnBhZ2Vjb250cm9sLmNoaWxkcmVuKFwibGlcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIG9iaikge1xuICAgICAgICAkKG9iaikuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBzZWxmLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgc2VsZi5hbmltYXRlKCk7XG4gICAgICAgICAgICAvLyBzZWxmLmJhbm5lcnVsLmFuaW1hdGUoe1wibGVmdFwiOi03OTggKiAgaW5kZXh9LCA1MDAgKTtcbiAgICAgICAgICAgIC8vICQob2JqKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn07XG4vLyDnrq3lpLTngrnlh7vkuovku7ZcbkJhbm5lci5wcm90b3R5cGUubGlzdGVuQXJyb3dDbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuYXJyb3dsZWZ0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhpcy5pbmRleCAtLTtcbiAgICAgICAgaWYoc2VsZi5pbmRleCA9PT0gMCl7XG4gICAgICAgICAgICBzZWxmLmJhbm5lcnVsLmNzcyh7XCJsZWZ0XCI6c2VsZi5iYW5uZXJjb3VudCAqIDc5OH0pO1xuICAgICAgICAgICAgc2VsZi5pbmRleCA9IHNlbGYuYmFubmVyY291bnQgLSAxO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmluZGV4IC0tO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlbGYuYmFubmVydWwuYW5pbWF0ZSh7XCJsZWZ0XCI6LTc5OCAqICBzZWxmLmluZGV4fSwgNTAwICk7XG4gICAgICAgIHNlbGYuYW5pbWF0ZSgpO1xuXG4gICAgfSk7XG4gICAgc2VsZi5hcnJvd3JpZ2h0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoc2VsZi5pbmRleCA9PT0gc2VsZi5iYW5uZXJjb3VudCArIDEpe1xuICAgICAgICAgICAgc2VsZi5iYW5uZXJ1bC5jc3Moe1wibGVmdFwiOi03OTh9KTtcbiAgICAgICAgICAgIHNlbGYuaW5kZXggPSAyO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmluZGV4ICsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNlbGYuYmFubmVydWwuYW5pbWF0ZSh7XCJsZWZ0XCI6LTc5OCAqICBzZWxmLmluZGV4fSwgNTAwICk7XG4gICAgICAgIHNlbGYuYW5pbWF0ZSgpO1xuICAgIH0pO1xuXG59O1xuLy8g6byg5qCH5pS+5LiK5Y6755qE5LqL5Lu2XG5CYW5uZXIucHJvdG90eXBlLmxpc3RlbmJhbm5lcmhvdmVyID0gZnVuY3Rpb24oKXtcblxuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLScpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmJhbm5lcmdyb3VwLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g56ys5LiA5Liq5Ye95pWw5piv6byg5qCH5pS+5LiK5Y675omn6KGM55qE5Ye95pWwXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi50aW1lcik7XG4gICAgICAgIHNlbGYudG9nZ2xlQXJyb3codHJ1ZSk7XG4gICAgfSxmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8v56ys5LqM5Liq5Ye95pWw5piv6byg5qCH5ou/6LWw5omn6KGM55qE5Ye95pWwXG4gICAgICAgIHNlbGYubG9vcCgpO1xuICAgICAgICBzZWxmLnRvZ2dsZUFycm93KGZhbHNlKTtcblxuICAgIH0pO1xufTtcbi8vIOW+queOr+aOp+WItlxuQmFubmVyLnByb3RvdHlwZS5sb29wID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJy0tLS1sb29wLS0tLScpO1xuICAgIC8vIHZhciBiYW5uZXJVbCA9ICQoXCIjYmFubmVyLXVsXCIpO1xuICAgIC8vIHZhciBpbmRleCA9IDA7XG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoc2VsZi5pbmRleCA+PSBzZWxmLmJhbm5lcmNvdW50ICsgMSl7XG4gICAgICAgICAgICBzZWxmLmJhbm5lcnVsLmNzcyh7XCJsZWZ0XCI6IC03OTh9KTtcbiAgICAgICAgICAgIHNlbGYuaW5kZXggPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5pbmRleCArKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhbm5lclVsLmFuaW1hdGUoe1wibGVmdFwiOi03OTggKiAgc2VsZi5pbmRleH0sIDUwMCApO1xuICAgICAgICBzZWxmLmFuaW1hdGUoKTtcbiAgICB9LDIwMDApO1xufTtcbi8vIOaJp+ihjOWHveaVsFxuQmFubmVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1ydW4tLS0tJyk7XG4gICAgdGhpcy5pbml0YmFubmVyKCk7XG4gICAgdGhpcy5pbml0cGFnZWNvbnRyb2woKTtcbiAgICB0aGlzLmxvb3AoKTtcbiAgICB0aGlzLmxpc3RlbkFycm93Q2xpY2soKTtcbiAgICB0aGlzLmxpc3RlbnBhZ2Vjb250cm9sKCk7XG4gICAgdGhpcy5saXN0ZW5iYW5uZXJob3ZlcigpO1xuXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG59O1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYmFubmVyID0gbmV3IEJhbm5lcigpO1xuICAgIGJhbm5lci5ydW4oKTtcbn0pO1xuIl19
